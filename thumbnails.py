#!/usr/bin/env python3 
import subprocess, os, json, argparse, time

files = []
presentations = []

parser = argparse.ArgumentParser(description='Options as below')
parser.add_argument('indir', type=str, help='Input dir where reports are located')

arguments = parser.parse_args()

folder = arguments.indir

for (dirpath, dirnames, filenames) in os.walk(folder):
    files.extend(filenames)
    break


for file in files:
    #print(file.split("."))
    if (file.split(".")[1] == "pdf") or (file.split(".")[1] == "mov"):
        presentations.append(folder + file)

#print(presentations)
json_file = []
print("Creating thumbnails")
for presentation in presentations:
    params = ['convert', presentation+'[0]','-resize', '50%' ,'-alpha', 'remove' ,  "." +presentation.split(".")[1] + '_thumb.png']
    subprocess.Popen(params, stdin=subprocess.PIPE, shell=False)
    pr = presentation.split("/")
    pr = "/".join(pr[1:])
    #print(pr)
    tb = "." + presentation.split(".")[1] + '_thumb.png'
    tb = "/".join(tb.split("/")[1:])
    json_file.append({
        "author" : pr.split("/")[2],
        "file": pr,
        "thumbnail": tb
    })
    time.sleep(0.1)
jsondump = json.dumps(json_file, indent=4)

print("Writing json files")

with open('1a.json', 'w') as outfile:
    outfile.write(jsondump)
    