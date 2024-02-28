function proc(x) {
    var y = x + 2;

    for (var i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            y += i;
        }
    }

    var result = y * 3;
    return result;
}
