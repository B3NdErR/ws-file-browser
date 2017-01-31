'use strict';

import * as fse from 'fs-extra';
import * as Promise from 'bluebird';
import * as path from 'path';

interface FileJSON {
    name: string;
    path: string;
}

class FileManager{
    root: string;
    constructor() {
        this.root = '../filesystem';
    }

    public list(dir: string){
      return new Promise((resolve, reject) =>{
        dir = dir || this.root;
        fse.readdir(dir, (err, files) => {
          if(err) return reject(err);
          let fstatList = [];
          files.map(f => path.join(dir, f));
          for(let f of files){
            fstatList.push(fse.statSync(f));
          }
          resolve(fstatList);
        })
      });

    }

}

export = FileManager;
