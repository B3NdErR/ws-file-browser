'use strict';

import * as fse from 'fs-extra';

interface FileJSON {
    name: string;
    path: string;
}

class FileManager{
    root: string;
    constructor() {
        this.root = '../filesystem';
    }
    
    public FileJSON list(path: string){
        return {
            name: 'test',
            path: 'path'
        };
    }
    
}