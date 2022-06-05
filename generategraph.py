import networkx as nx
import pygraphviz as pgv
from networkx.readwrite import json_graph
from networkx.drawing.nx_agraph import to_agraph

def generategraph(inputJson):
    
    G = json_graph.node_link_graph(inputJson, directed=True, multigraph=True)

    A = to_agraph(G)

    A.draw('static/img.png', prog='dot')


