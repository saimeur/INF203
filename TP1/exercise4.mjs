import {Std, ForStudent} from "./exercise3.mjs";
import * as fs from 'fs';


export class Prom{
    constructor(){
        this.prom = []
    }

    add(student){this.prom.push(student)}

    size(){return this.prom.length}

    get(i){return this.prom[i]}

    print(){
        let str = "" 
        for(var std of this.prom){
            console.log(std.toString())
            str+= std.toString()+"\n"
        }
        return str
    }

    write() {
        return JSON.stringify(this.prom);
    }

    read(str){
        this.prom = []
        for(var std of JSON.parse(str)){
            if(std["nationality"] === undefined){
                this.add(new Std(std["lastName"],std["fisrtName"],std["id"]))
                //console.log("c'est un STD")
            }
            else{
                this.add(new ForStudent(std["lastName"],std["fisrtName"],std["id"],std["nationality"]))
                //console.log("c'est un ForStudent")
            }
        }
    }

    saveToFile(fileName){
        try {
            fs.writeFileSync(fileName, this.write()); // Write data to a file synchronously
            console.log('Promotion data saved to file successfully.');
        } catch (err) {
            console.error('Error saving to file:', err);
        }
    }

    readFrom(fileName){
        try {
            const data = fs.readFileSync(fileName, 'utf8'); // Read file synchronously
            this.read(data)
            console.log('Promotion data read from file successfully.');
            this.print();
        } catch (err) {
            console.error('Error reading from file:', err);
        }
    }

}