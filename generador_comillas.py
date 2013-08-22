#!/usr/bin/python

import sys

f = open(sys.argv[1])
o = open(sys.argv[2],"r+")

while 1:
    line = f.readline()
    if not line: break

    line = line.replace("'RRDtool xport JSON output'","\"RRDtool xport JSON output\"")
    line = line.replace("about","\"about\"")
    line = line.replace("meta","\"meta\"")
    line = line.replace("start","\"start\"")
    line = line.replace("legend","\"titulo\"")
    line = line.replace("\'\'","\"\"")
    line = line.replace("end","\"end\"")
    line = line.replace("data","\"data\"")
    line = line.replace("step","\"step\"")
        
    o.write(line + "\n")
    
o.close()
