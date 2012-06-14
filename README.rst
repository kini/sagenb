.. nodoctest

.. This README does not explain how to handle installation into versions
   of Sage which do not yet ship the flask notebook, as the packaging of
   the notebook's dependencies is still in flux. Please see
   http://code.google.com/r/jasongrout-flask-sagenb/ for more
   information. # XXX 2011-12-22



This is the standalone Sage Notebook.

Most of the notebook does not depend on having Sage installed. Only
a few miscellaneous functions are imported from Sage. We welcome help in
making the notebook completely independent from Sage, or indeed, any
other help with the Sage notebook. Sage notebook development discussions
happen on the sage-notebook_ mailing list.

.. _sage-notebook: http://groups.google.com/group/sage-notebook



Installation
============

Install Sage, then do ``sage -python setup.py install`` in the current
directory. Then run the notebook from within Sage as follows::

    sage: import sagenb.notebook.notebook_object as nb
    sage: nb.notebook(directory="mynotebook")

This will create a directory ``mynotebook.sagenb``, and all notebook
data is stored in that directory.

If you are interested in developing the Sage Notebook, run 
``sage -python setup.py develop`` instead of ``sage -python setup.py install``

SSL support
-----------

SSL is required for OpenID and accessing HTTPS from the Sage shell. Your
Sage install should usually support SSL out of the box, but if you
compiled it from source on a machine without the libssl headers, it may
not. You can check for SSL support by running ``import ssl`` in the Sage
console. If you get an error, then do the following.

1. Install the libssl headers on your system. On Debian-based systems,
   one way to do this is to run ``sudo apt-get install libssl-dev``.
2. Recompile Sage's internal Python interpreter by running ``sage -f
   python``.



Development
===========

See the Sage Developer's guide, part of the Sage documentation, for
instructions. Also see ``development notes.rst``.
