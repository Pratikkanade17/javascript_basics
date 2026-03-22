// Immediate invoke function expression
// Why Do We Use IIFE? 🤔
// ✅ 1. Avoid Global Scope Pollution
// ✅ 2. Immediate Execution
// ✅ 3. Data Privacy (Encapsulation)

(function chai(){
    console.log(`MY NAME IS CRUSH`);
    
}) ();

// +++++++++++++++++++++++++++++++++++++++++
(() => {
    console.log(`ur name love`);
    
}) ();

// ++++++++++++++++++++++++++++++++++++++++++
((name) => {
    console.log(`ur name love ${name}`);
    
}) ('lost')


