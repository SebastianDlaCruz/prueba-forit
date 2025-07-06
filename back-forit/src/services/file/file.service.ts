import fs from 'node:fs';
import path from 'node:path';
import { FileMethods } from "./interface/file.interface";
export class FileService implements FileMethods {

  private readonly filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, '../../db/data.json');
  }
  read(): Promise<string> {

    return new Promise((resolve, reject) => {

      fs.readFile(this.filePath, 'utf-8', (err, data) => {

        if (!err) resolve(data)

        reject(data);
      });
    })

  }
  write<CreateTask>(data: CreateTask): void {

    fs.writeFile(this.filePath, JSON.stringify(data), 'utf-8', (err) => {
      if (err) console.log(err);
    })

  }

} 