import logging
import sys

root = logging.getLogger()
root.setLevel(logging.DEBUG)

ch = logging.StreamHandler(sys.stdout)
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
root.addHandler(ch)

string = 'this_is_a_test'

def toCamel(instr):
    strA = string.split('_')
    camstr = ''
    for i in strA:
        camstr += i[0].upper() + i[1:len(i)]
    return camstr


print(toCamel(string))
import logging

innumb = 12
def isPerfect(innumb):
    divset = set()

    for i in xrange(1, innumb):
        if innumb%i == 0:
            divset.add(i)

    sum = 0
    for i in divset:
        sum += i

    if sum == innumb:
        return True
    else:
        return False
    
print(isPerfect(innumb))

def display_arguments(func):
    """https://amaral.northwestern.edu/blog/function-wrapper-and-python-decorator"""
    def display_and_call(*args, **kwargs):      
        args = list(args)
        logging.debug('must-have arguments are:')
        for i in args:
            logging.debug(i)          
        logging.debug('optional arguments are:')
        for kw in kwargs.keys():
            logging.debug( kw+'='+str( kwargs[kw] ) )          
        return func(*args, **kwargs)   
    return display_and_call

@display_arguments
def my_add(m1, p1=0, opt=None):
    output_dict = {}
    output_dict['r1'] = m1+p1
    return output_dict

my_add(1, 3, opt='hi')
