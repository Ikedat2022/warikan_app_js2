document.getElementById('calculator').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信を防止
  console.log('JavaScript呼び出し成功');
  let valueToMe = document.getElementById('toMe');
  let valueToYou = document.getElementById('toYou');
  if (!valueToMe.checked && !valueToYou.checked) {
    console.log('CheckBox Is Not Checked');
    alert('チェックを付けてね///');
  } else {
    let toBeAddingAmount = document.getElementById("toBeAddingAmount").value;
    let beforeAddedTotalAmount = document.getElementById("totalAmount").value;
    let addTotalAmount = Number(toBeAddingAmount) + Number(beforeAddedTotalAmount);
    console.log('合計金額：' + addTotalAmount);
    document.getElementById("totalAmount").value = addTotalAmount;

    let beforeAddedMyTotalAmount = document.getElementById("myTotalAmount").value;
    let beforeAddedYourTotalAmount = document.getElementById("yourTotalAmount").value;
    let beforeAddedMyPaymentAmount = document.getElementById("myPaymentAmount").value;
    let beforeAddedYourPaymentAmount = document.getElementById("yourPaymentAmount").value;
    
    let beforeAddedMyPaymentOgoriAmount = document.getElementById("myPaymentOgoriAmount").value;
    let beforeAddedYourPaymentOgoriAmount = document.getElementById("yourPaymentOgoriAmount").value;
    console.log('beforeAddedmyPaymentOgoriAmount' + beforeAddedMyPaymentOgoriAmount);
    console.log('beforeAddedYourPaymentOgoriAmount' + beforeAddedYourPaymentOgoriAmount);
    
    if(document.getElementById("darega").value === 'myPayment'){
      console.log('私が支払った金額'+ toBeAddingAmount);
      let test1 = Number(beforeAddedMyPaymentAmount) + Number(toBeAddingAmount);
      console.log('私が支払った合計金額：' + test1);
      document.getElementById("myPaymentAmount").value = test1; 
      if(document.getElementById("ogori").checked && document.getElementById("toMe").checked){
        console.log('私のおごりが私になってる');
        alert('あら？おごったのはお相手の分の間違いじゃないかしら？');
      }
      if(document.getElementById("ogori").checked && !document.getElementById("toMe").checked && document.getElementById("toYou").checked){
        let addedMyTotalOgoriAmount = Number(beforeAddedMyPaymentOgoriAmount) + Number(toBeAddingAmount);
        console.log('私のおごりの合計金額：' + addedMyTotalOgoriAmount);
        document.getElementById("myPaymentOgoriAmount").value = addedMyTotalOgoriAmount;
        let addedYourTotalAmount = Number(beforeAddedYourTotalAmount) + Number(toBeAddingAmount);
        console.log('あなたの分の合計金額：' + addedYourTotalAmount);
        document.getElementById("yourTotalAmount").value = addedYourTotalAmount;
      }
    } else {
      console.log('あなたが支払った金額'+ toBeAddingAmount);
      let test2 = Number(beforeAddedYourPaymentAmount) + Number(toBeAddingAmount);
      console.log('あなたが支払った合計金額：' + test2);
      document.getElementById("yourPaymentAmount").value = test2;   
      if(document.getElementById("ogori").checked && document.getElementById("toYou").checked){
        console.log('私のおごりが私になってる');
        alert('あら？おごったのはお相手の分の間違いじゃないかしら？');
      }
      if(document.getElementById("ogori").checked && !document.getElementById("toYou").checked && document.getElementById("toMe").checked){
        let addedYourTotalOgoriAmount = Number(beforeAddedYourPaymentOgoriAmount) + Number(toBeAddingAmount);
        console.log('あなたのおごりの合計金額：' + addedYourTotalOgoriAmount);
        document.getElementById("yourPaymentOgoriAmount").value = addedYourTotalOgoriAmount;
        let addedMyTotalAmount = Number(beforeAddedMyTotalAmount) + Number(toBeAddingAmount);
        console.log('私の分の合計金額：' + addedMyTotalAmount);
        document.getElementById("myTotalAmount").value = addedMyTotalAmount;
      }
    }
    
    if(!document.getElementById("ogori").checked){
    if (valueToMe.checked && valueToYou.checked) {
      console.log('toMe and toYou');
      let halfBeforeToBeAddingMyTotalAmount = Math.ceil(toBeAddingAmount / 2);
      let halfAddedMyTotalAmount = Number(beforeAddedMyTotalAmount) + Number(halfBeforeToBeAddingMyTotalAmount);
      console.log('私の分の合計金額：' + halfAddedMyTotalAmount);
      document.getElementById("myTotalAmount").value = halfAddedMyTotalAmount;
      let halfBeforeToBeAddingYourTotalAmount = Math.floor(toBeAddingAmount / 2);
      let halfAddedYourTotalAmount = Number(beforeAddedYourTotalAmount) + Number(halfBeforeToBeAddingYourTotalAmount);
      console.log('あなたの分の合計金額：' + halfAddedYourTotalAmount);
      document.getElementById("yourTotalAmount").value = halfAddedYourTotalAmount;
    } else if (valueToMe.checked) {
      console.log('toMe');
      let addedMyTotalAmount = Number(beforeAddedMyTotalAmount) + Number(toBeAddingAmount);
      console.log('私の分の合計金額：' + addedMyTotalAmount);
      document.getElementById("myTotalAmount").value = addedMyTotalAmount;
    } else {
      console.log('toYou');
      let addedYourTotalAmount = Number(beforeAddedYourTotalAmount) + Number(toBeAddingAmount);
      console.log('あなたの分の合計金額：' + addedYourTotalAmount);
      document.getElementById("yourTotalAmount").value = addedYourTotalAmount;
    }
  }}
  //  document.getElementById('result').style.display = 'block';
});


