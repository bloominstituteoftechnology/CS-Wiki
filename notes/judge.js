function uncover_spy(n, trust) {
if (n == 1 && trust.length == 0) return 1;
let left = [];
let right = [];
for (const t of trust) {
left.push(t[0]);
right.push(t[1]);
}
let element = [...new Set(right)];
let bobo = [];
for (const e of element) {
if (getFrequency(right, e) == n - 1) {
bobo.push(e);
}
}
let res = bobo.filter(bob => left.indexOf(bob) == -1);
if (res.length == 0) return -1;
return res[0];
};
const getFrequency = (arr, item) => {
return arr.filter(x => x === item).length;
};