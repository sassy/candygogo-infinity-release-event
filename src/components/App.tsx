import React from 'react';
import '../App.css';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>特典</h1>
        <div>
        特典券１枚でどちらか選べる～複数購入、リピート購入も可
          <ul>
            <li>CDサイン（ユニット名と指定メンバー１名のサイン）</li>
            <li>ソーシャルディスタンス写メ１枚（指定メンバー１名の１shot 写メ）</li>
          </ul>
        </div>
        <h1>
          スケジュール
        </h1>
        <div>
          <ul>
          <li>14日火曜日　１９：００～HMV&BOOKS SHIBUYA ７階（渋谷modi内７階）</li>
          <li>15日水曜日　２０：００～SHIBUYA TSUTAYA8階</li>
          <li>16日木曜日　２０：００～タワーレコード横浜ビブレ店</li>
          <li>17日金曜日 　なし</li>
          <li>18日土曜日　＊調整中</li>
          <li>19日日曜日　１３：００～タワーレコード池袋店5階</li>
          </ul>
        </div>
        <h1>参加者情報の収集について</h1>
        <div>
※新型コロナ感染拡大防止の一環として、イベントスペース内に掲示しているQRコードよりアクセスいただき、
①お名前②電話番号③メールアドレスの登録をお願い致します。
</div>
<div>
入場の際に、登録後の返信メールと身分証（氏名が印字された証明書【免許証、保険証、学生証、パスポート等】）を提示いただき、
ご本人確認をさせていただきます。
</div>
<div>
ご本人と確認できない場合はイベントに参加いただけない場合もございます。
お寄せいただいた情報は、万一来場者の中から新型コロナウイルス感染者が発生した場合に、
お客様にその旨をご連絡する目的（必要に応じて、保健所等に提供）で使用いたします。
ご登録頂きました個人情報は、イベント実施日より１ヶ月後、弊社が責任をもって廃棄致します。
イベント参加の際、登録が必須となりますのでご了承ください。
</div>
<div>
【登録内容】イベントの参加日/参加店舗/アーティスト名/お名前/電話番号/メールアドレス
        </div>
      </main>
    </div>
  );
}

export default App;
