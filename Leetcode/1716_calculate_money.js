// #1716 Calculate Money in Leetcode Bank


var totalMoney = function(n) {
    
    let day = 0;
    let bank = 0;

    for (let week = 1; day < n; week++) {
        for (let money_each_day = 0; money_each_day < 7 && day < n; money_each_day++) {
            bank += week+money_each_day;
            // we dont care the day since the beginning we just one to add one day at a time (basically is like temp or flag thing just to keep track on n )
            day++
            // console.log("bank:"+bank,"day:"+day,"week:"+week,"money:"+money_each_day)
        };
    }
    return bank;
};

