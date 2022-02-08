const buffer = Buffer.alloc(26);

for(let i=0; i<26; i++) {
    // 97 = a di utf8
    // dst
    buffer[i]=i+97;
}
console.log(buffer.toString('utf-8')); // a, b, c, dst