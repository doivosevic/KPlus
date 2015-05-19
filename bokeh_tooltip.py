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

def filterProductData(product):
	return [ product['price']['amount'], product['name'] ]

def prepareFigure(fig, color, x, y, label):
	source = ColumnDataSource( data=dict(x=x, y=y, label=label) )
	fig.line('x', 'y', color=color, line_width=2, source=source)
	fig.circle('x', 'y', color=color, line_width=2, source=source)
	hover =  fig.select(dict(type=HoverTool))
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

def getCijeneImena(the_file):
	data = open(the_file, encoding='utf-8').read()
	jsoned = json.loads(data)
	return list(map(lambda x: (x['price']['amount'], x['name'])
						,jsoned['products']))

# BOKEH OUTPUT FILE
output_file("line_dots.html", title="line.py example")

TOOLS = "crosshair, pan, wheel_zoom, box_zoom, reset, hover, previewsave"
p = figure(title="charty chart", tools = TOOLS, width=1300, height=500)

# SETUP FOR KPLUS DATA
os.chdir('C:/Users/Dito/Desktop/dump')
#os.chdir('c:\Users\Dito\Desktop\dump')
files = os.listdir()
files_djeca = list(filter(lambda x: "ji svijet" in x, files))

#prepareFigure(p, list(range(len(cijene))), cijene, imena)
oldest = getXCijeneImena(files_djeca[0])
newest = getXCijeneImena(files_djeca[len(files_djeca)-1])

old = [[], [], []]
for i in oldest[0]:
	if oldest[2][i] in newest[2]:
		old[1].append(oldest[1][i])
		old[2].append(oldest[2][i])

new = [[], [], []]
for i in newest[0]:
	if newest[2][i] in oldest[2]:
		new[1].append(newest[1][i])
		new[2].append(newest[2][i])

prepareFigure(p, "#ff0000", old[0], old[1], old[2])
prepareFigure(p, "#00ff00", new[0], new[1], new[2])

print(len(new[0]))
print(len(old[0]))

show(p)