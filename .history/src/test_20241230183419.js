<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
</head>

<body>
    <select name="" id="">
            <option value="0">请选择价格范围</option>
            <option value="1">&lt100</option>
            <option value="2">100~500</option>
            <option value="3">&gt500</option>
        </select>
    <ul>
        <li>牛客logo马克杯</li>
        <li>无盖星空杯</li>
        <li>老式茶杯</li>
        <li>欧式印花杯</li>
    </ul>

    <script>
        var cups = [
                { type: 1, price: 100, color: 'black', sales: 60, name: '牛客logo马克杯' },
                { type: 2, price: 40, color: 'blue', sales: 100, name: '无盖星空杯' },
                { type: 4, price: 60, color: 'green', sales: 200, name: '老式茶杯' },
                { type: 3, price: 50, color: 'green', sales: 600, name: '欧式印花杯' }
            ]
            var select = document.querySelector('select');
            var ul = document.querySelector('ul');
            // 补全代码
            let list=[];
            select.onclick=()=>{
                switch(select.value) {
                    case '1':
                    list = cups.filter((item) => {
                        return item.sales<100;
                    })
                    break;
                    case '2':
                    list = cups.filter((item) => {
                        return item.sales<=500 && item.sales>=100;
                    })
                    break;
                    case '3':
                    list = cups.filter((item) => {
                        return item.sales>500;
                    })
                    break;
                }

                ul.innerHTML=list.map((item)=>{
                    return `<li>${item.name}</li>`
                }).join('');
            }
    </script>
</body>

</html>