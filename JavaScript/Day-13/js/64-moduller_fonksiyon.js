const topla = (...sayilar) =>
{
return sayilar.reduce((acc,curr) => acc+curr,0);

};

console.log(topla());