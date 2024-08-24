function make_shirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a '".concat(size, "' size T-shirt , and print '").concat(message, "' on it !"));
}
make_shirts();
make_shirts("medium");
make_shirts("small", "AdiDas");
