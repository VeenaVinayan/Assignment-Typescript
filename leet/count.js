var getLucky = function(s, k) {
    let count = 0, digs = s.split('').map((a) => a.charCodeAt(0) - 96).join('')
    while (count < k) {
        const total = digs.split('').reduce((acc, val) => acc + Number(val), 0)
        digs = `${total}`;
        count++;
    }
    return Number(digs)