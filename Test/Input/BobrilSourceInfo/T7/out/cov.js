var __c0v = new Uint32Array(42);

window.__c0v = __c0v;

function __c0vS(i) {
    __c0v[i]++;
}

function __c0vC(r, i) {
    __c0v[i + (r ? 1 : 0)]++;
    return r;
}

__c0vS(0);

var BlobBuilder = __c0vC(typeof BlobBuilder !== "undefined", 1) ? BlobBuilder : __c0vC(typeof WebKitBlobBuilder !== "undefined", 3) ? WebKitBlobBuilder : __c0vC(typeof MSBlobBuilder !== "undefined", 5) ? MSBlobBuilder : __c0vC(typeof MozBlobBuilder !== "undefined", 7) ? MozBlobBuilder : false;

__c0vS(9);

var blobSupported = function() {
    __c0vS(10);
    try {
        __c0vS(11);
        var a = new Blob([ "hi" ]);
        __c0vS(12);
        return a.size === 2;
    } catch (e) {
        __c0vS(13);
        return false;
    }
}();

__c0vS(14);

var blobSupportsArrayBufferView = blobSupported && function() {
    __c0vS(15);
    try {
        __c0vS(16);
        var b = new Blob([ new Uint8Array([ 1, 2 ]) ]);
        __c0vS(17);
        return b.size === 2;
    } catch (e) {
        __c0vS(18);
        return false;
    }
}();

__c0vS(19);

var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

__c0vS(20);

function mapArrayBufferViews(ary) {
    __c0vS(21);
    return ary.map(function(chunk) {
        __c0vS(22);
        if (__c0vC(chunk.buffer instanceof ArrayBuffer, 23)) {
            __c0vS(25);
            var buf = chunk.buffer;
            __c0vS(26);
            if (__c0vC(chunk.byteLength !== buf.byteLength, 27)) {
                __c0vS(29);
                var copy = new Uint8Array(chunk.byteLength);
                __c0vS(30);
                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                __c0vS(31);
                buf = copy.buffer;
            }
            __c0vS(32);
            return buf;
        }
        __c0vS(33);
        return chunk;
    });
}

__c0vS(34);

function BlobBuilderConstructor(ary, options) {
    __c0vS(35);
    options = options || {};
    __c0vS(36);
    var bb = new BlobBuilder();
    __c0vS(37);
    mapArrayBufferViews(ary).forEach(function(part) {
        __c0vS(38);
        bb.append(part);
    });
    __c0vS(39);
    return __c0vC(options.type, 40) ? bb.getBlob(options.type) : bb.getBlob();
}

//# sourceMappingURL=cov.js.map
