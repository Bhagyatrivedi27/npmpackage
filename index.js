function isNITWEmail(string)  {
    if(!string.includes('@student.nitw.ac.in') && !string.includes('@nitw.ac.in'))
    return false;
    else return true;
}

module.exports = isNITWEmail