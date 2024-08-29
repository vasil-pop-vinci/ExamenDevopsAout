const isValid = (year) => {
    return year % 400 === 0;
};

exports.isValid = isValid;
