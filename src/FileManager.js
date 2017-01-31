'use strict';
var fse = require("fs-extra");
var Promise = require("bluebird");
var path = require("path");
var FileManager = (function () {
    function FileManager() {
        this.root = '../filesystem';
    }
    FileManager.prototype.list = function (dir) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dir = dir || _this.root;
            fse.readdir(dir, function (err, files) {
                if (err)
                    return reject(err);
                var fstatList = [];
                files.map(function (f) { return path.join(dir, f); });
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var f = files_1[_i];
                    fstatList.push(fse.statSync(f));
                }
                resolve(fstatList);
            });
        });
    };
    return FileManager;
}());
module.exports = FileManager;
