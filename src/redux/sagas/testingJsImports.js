

function toBeTested(a, b) {
    return a + b
}

if (typeof window !== 'undefined' && window) window.toBeTested = toBeTested
else if (typeof global !== 'undefined' && global) global.toBeTested = toBeTested
