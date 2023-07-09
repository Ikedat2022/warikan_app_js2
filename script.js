document.getElementById('calculator').addEventListener('submit', function (event) {
  event.preventDefault(); // フォームのデフォルトの送信を防止
  console.log('JavaScript呼び出し成功');
  let valueToMe = document.getElementById('toMe');
  let valueToYou = document.getElementById('toYou');
  if (!valueToMe.checked && !valueToYou.checked) {
    console.log('チェックが付いていません');
    alert('チェック外さないでよお…///');
  } if (document.getElementById("darega").value === 'myPayment' && document.getElementById("ogori").checked && document.getElementById("toMe").checked) {
    console.log('私のおごりが私になってる');
    alert('あら？おごったのはお相手の分の間違いじゃないかしら？');
  } else if (document.getElementById("darega").value === 'yourPayment' && document.getElementById("ogori").checked && document.getElementById("toYou").checked) {
    console.log('あなたのおごりがあなたになってる');
    alert('あら？わたしがおごってもらったんじゃなかったかしら？');
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

    if (document.getElementById("darega").value === 'myPayment') {
      console.log('私が支払った金額' + toBeAddingAmount);
      let myPaymentAmount = Number(beforeAddedMyPaymentAmount) + Number(toBeAddingAmount);
      console.log('私が支払った合計金額：' + myPaymentAmount);
      document.getElementById("myPaymentAmount").value = myPaymentAmount;
      if (document.getElementById("ogori").checked && !document.getElementById("toMe").checked && document.getElementById("toYou").checked) {
        let addedMyTotalOgoriAmount = Number(beforeAddedMyPaymentOgoriAmount) + Number(toBeAddingAmount);
        console.log('私のおごりの合計金額：' + addedMyTotalOgoriAmount);
        document.getElementById("myPaymentOgoriAmount").value = addedMyTotalOgoriAmount;
        let addedYourTotalAmount = Number(beforeAddedYourTotalAmount) + Number(toBeAddingAmount);
        console.log('あなたの分の合計金額：' + addedYourTotalAmount);
        document.getElementById("yourTotalAmount").value = addedYourTotalAmount;
      }
    } else {
      console.log('あなたが支払った金額' + toBeAddingAmount);
      let yourPaymentAmount = Number(beforeAddedYourPaymentAmount) + Number(toBeAddingAmount);
      console.log('あなたが支払った合計金額：' + yourPaymentAmount);
      document.getElementById("yourPaymentAmount").value = yourPaymentAmount;
      if (document.getElementById("ogori").checked && !document.getElementById("toYou").checked && document.getElementById("toMe").checked) {
        let addedYourTotalOgoriAmount = Number(beforeAddedYourPaymentOgoriAmount) + Number(toBeAddingAmount);
        console.log('あなたのおごりの合計金額：' + addedYourTotalOgoriAmount);
        document.getElementById("yourPaymentOgoriAmount").value = addedYourTotalOgoriAmount;
        let addedMyTotalAmount = Number(beforeAddedMyTotalAmount) + Number(toBeAddingAmount);
        console.log('私の分の合計金額：' + addedMyTotalAmount);
        document.getElementById("myTotalAmount").value = addedMyTotalAmount;
      }
    }

    if (!document.getElementById("ogori").checked) {
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
    }
    // 処理終了のため、計算対象金額を削除する
    document.getElementById('toBeAddingAmount').value = "";
  }
  //  document.getElementById('result').style.display = 'block';
});


