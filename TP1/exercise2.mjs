export function wordCount(s){
    let start = -1;
    let reset = 0
    var i;
    let res = {}
    for(i=0; i<s.length; i++){
        if (reset === 0 & s[i]!= " "){
            reset = 1;
            start = i;
        }
        if(s[i]=== " " && reset != 0){
            if (res[s.slice(start,i)]=== undefined){
                res[s.slice(start,i)]=1;
            }
            else{
                res[s.slice(start,i)]+=1;
            }
            reset = 0;
        }
    }
    if(s[i-1]!= " " && reset != 0){
        if (res[s.slice(start,i)]=== undefined){
            res[s.slice(start,i)]=1;
        }
        else{
            res[s.slice(start,i)]+=1;
        }
        reset = 0;
    }
    return res
}


export class WordL {
    constructor(str) {
        this.str = str;
        this.wordcount = wordCount(this.str);
    }

    getWords() {
        let tab=[];
        for(const [wrd, value] of Object.entries(this.wordcount)){
            tab.push(wrd);
        }
        return tab.sort()
    }

    maxCountWord(){
        //var wrd;
        let m = 0;
        let res =[]
        for(const [wrd, value] of Object.entries(this.wordcount)){
            if (value== m){
                res.push(wrd)
            }
            else if(value> m){
                res = [wrd]
                m = value
            }
        }
        return res.sort()[0]
    }

    minCountWord(){
        //var wrd;
        let m = Infinity;
        let res =[]
        for(const [wrd, value] of Object.entries(this.wordcount)){
            if (value == m){
                res.push(wrd)
            }
            else if(value < m){
                res = [wrd]
                m = value
            }
        }
        return res.sort()[0]
    }

    getCount(word){
        return (this.wordcount[word] || 0)
    }

    applyWordFunc(f){
        return this.getWords().map(f)
    }

}