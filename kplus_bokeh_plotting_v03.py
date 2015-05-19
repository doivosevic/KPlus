from collections import OrderedDict
import numpy as np
import os
import sys
import json

from bokeh.plotting import *
from bokeh.models import HoverTool

# DEFINE FUNCTION FOR PRINTING UTF8 CROATIAN CHARACTERS IN SUBLIME CONSOLE
def print2(what):
	sys.stdout.buffer.write(str(what).encode('utf-8'))
	print('\n')

def prepareFigure(fig, color, x, y, label):
	source = ColumnDataSource( data=dict(x=x, y=y, label=label) )
	#fig.line('x', 'y', color=color, line_width=2, source=source)
	fig.circle('x', 'y', color=color, radius=0.25, source=source)
	hover =  fig.select(dict(type=HoverTool))
	hover.snap_to_data = False
	hover.tooltips = OrderedDict([
		("index", "$index"),
		("(xx,yy)", "(@x, @y)"),
		("label", "@label")
	])

def getXCijeneImena(the_file):
	data = open(the_file, encoding='utf-8').read()
	jsoned = json.loads(data)
	products = list(map(lambda x: [ x['price']['amount'], x['name'] ]
						,jsoned['products']))
	imena = list(map(lambda x: x[1], products))
	cijene = list(map(lambda x: x[0]/100.0, products))
	x = list(range(len(cijene)))
	return (x, cijene, imena)

# BOKEH OUTPUT FILE
output_file("line_dots.html", title="line.py example")

TOOLS = "crosshair, pan, wheel_zoom, box_zoom, reset, hover, previewsave"
p = figure(title="charty chart", tools = TOOLS, width=1300, height=500)

# SETUP FOR KPLUS DATA
os.chdir('C:/Users/Dito/Desktop/dump')
files = os.listdir()
files_djeca = list(filter(lambda x: "Hrana" in x, files))


data = open(files_djeca[0], encoding='utf-8').read()
jsoned = json.loads(data)['products']
print2(json.dumps(jsoned, sort_keys=True, indent=4, separators=(',', ': ')))

'''
oldest = getXCijeneImena(files_djeca[0])
newest = getXCijeneImena(files_djeca[len(files_djeca)-1])

items_in_all = [item for item in oldest[2] if item in newest[2]]

items_in_all = [it for it in items_in_all 
	if abs(oldest[1][oldest[2].index(it)]-newest[1][newest[2].index(it)]) > 5]

indices = list(range(len(items_in_all)))
old = []
new = []
for item in items_in_all:
	old.append(oldest[1][oldest[2].index(item)])
	new.append(newest[1][newest[2].index(item)])

prepareFigure(p, "#ff0000", indices, old, items_in_all)
prepareFigure(p, "#00ff00", indices, new, items_in_all)



#print(len(new))
#print(len(old))

#show(p)
'''