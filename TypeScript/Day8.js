var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergesorrtedarray(array1, array2) {
    return __spreadArray(__spreadArray([], array1, true), array2, true).sort(function (a, b) { return a - b; });
}
console.log(mergesorrtedarray([1, 2], [4, 5, 3]));
