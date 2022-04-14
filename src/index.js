import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を追加し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成(DOM作成)
  const div = document.createElement("div");
  div.className = "list-row";

  //livタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ノードを取得
    const addTaget = deleteButton.parentNode;
    const text = addTaget.firstChild.innerText;

    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      //戻るノードを取得
      const backTaget = backButton.parentNode;
      const text = backTaget.firstChild.innerText;

      // div生成(DOM作成)
      const div = document.createElement("div");
      div.className = "list-row";

      //livタグの生成
      const li = document.createElement("li");
      li.innerText = text;

      //divタグの子要素に各要素を設定
      div.appendChild(li);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);

      //完了リストに挿入
      document.getElementById("incomplete-list").appendChild(div);

      document.getElementById("complete-list").removeChild(backTaget);
    });

    // div生成(DOM作成)
    const div = document.createElement("div");
    div.className = "list-row";

    //livタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    //完了リストに挿入
    document.getElementById("complete-list").appendChild(div);

    deleteFromIncompeleteList(addTaget);
  });

  //button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    //↓親要素を取得
    const deleteTaget = deleteButton.parentNode;
    //↓指定した要素を削除
    deleteFromIncompeleteList(deleteTaget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除

const deleteFromIncompeleteList = (target) => {
  //押された削除ボタンの親タグ(div)を未完了リストから削除
  //↓指定した要素を削除
  document.getElementById("incomplete-list").removeChild(target);
};
