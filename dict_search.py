import argparse
import os
import json
import collections
import xml.etree.ElementTree as ET
import pprint
import xml.dom.minidom

pp = pprint.PrettyPrinter(indent=4)

scholarly_html_filename = 'scholarly.html'


def dictionary_search(dictionary, line):
    for entry in dictionary['entries']:
        if entry['term'] in line:
            return entry


def dictionary_entry_by_id(dictionary, id):
    match = next(x for x in dictionary['entries'] if x['identifiers']['contentmine'] == id) # TODO check if ID no exists
    return match


def generate_pretty_xml(results, dictionary):
    results_root = ET.Element('results')
    results_root.attrib['title']='dictionary frequency count'
    for ctree in results:
        for dict_result in results[ctree]:
            dict_result_element = ET.SubElement(results_root, 'result')
            dict_result_element.attrib['CTree'] = ctree
            dict_result_element.attrib['contentmineID'] = dict_result
            dict_result_element.attrib['count'] = str(results[ctree][dict_result])
            dictionary_entry = dictionary_entry_by_id(dictionary, dict_result)
            dict_result_element.text = dictionary_entry['term']
            dict_result_element.attrib['wikidataID']=dictionary_entry['identifiers']['wikidata']
    xmlString = xml.dom.minidom.parseString(ET.tostring(results_root, 'utf-8'))
    prettyXML = xmlString.toprettyxml()
    return prettyXML


def write_summary_results_xml(cproject, dictionary, results):
    results_filepath = os.path.join(cproject, 'dictionary.' + dictionary['id'] + '.counts.xml')
    prettyXML = generate_pretty_xml(results, dictionary)
    with open(results_filepath, 'w') as results_file:
        results_file.write(prettyXML)


def write_ctree_results(CTree, dictionary, results):
    results_dir_path = os.path.join(CTree.path, 'results')
    os.makedirs(results_dir_path, exist_ok=True)
    results_filepath = os.path.join(results_dir_path, 'dictionary.' + dictionary['id'] + '.counts.xml')
    prettyXML = generate_pretty_xml(results, dictionary)
    with open(results_filepath, 'w') as results_file:
        results_file.write(prettyXML)


def main(args):
    files = os.walk(args.cproject)
    # Do directory list to find all things that should be CTrees
    #Find all things in these folders (no deeper) that are called scholarly.html

    #Open the file as a string
    #Rip out any formatting and make it into just a string

    #Look for every entry of the dictionary in the big document string
    # if found increment count in some storage thing.
    with open(args.dict) as dict_file:
        dictionary = json.load(dict_file)
        # print(dictionary)

    results = collections.defaultdict(lambda: collections.defaultdict(int))

    for CTree in os.scandir(args.cproject):
        if CTree.is_dir():
            try:
                with open(os.path.join(CTree.path, scholarly_html_filename)) as scholarly_html_contents:
                    for line in scholarly_html_contents:
                        result = dictionary_search(dictionary, line)
                        if result:
                            results[CTree.name][result['identifiers']['contentmine']] += 1
                write_ctree_results(CTree, dictionary, {CTree.name: results[CTree.name]})
            except IOError as e:
                print(CTree.path + ' has no ' + scholarly_html_filename)
    write_summary_results_xml(args.cproject, dictionary, results)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Search Papers in CProject For Terms in ContentMine Dictionary')
    parser.add_argument('--cproject', dest='cproject', help='relative or absolute '
                        'path of the cproject')
    parser.add_argument('--dictionary', dest='dict', help='relative or absolute '
                        'path of the json dictionary')
    parser.add_argument('--logpath', dest='logpath', help='relative or '
                        'absolute path of the logfile')
    args = parser.parse_args()
    main(args)