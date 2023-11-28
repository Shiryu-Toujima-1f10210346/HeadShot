import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [educationAndEmployment, setEducationAndEmployment] = useState('');
  const [licensesAndQualifications, setLicensesAndQualifications] = useState('');
  const [motivation, setMotivation] = useState('');
  const [personalRequests, setPersonalRequests] = useState('');
  const [guardian, setGuardian] = useState('');

  return (
    <div>
      <Head>
        <title>履歴書</title>
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="container mx-auto px-4 py-2">
        {/* 履歴書ヘッダー */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="text-2xl font-bold">履歴書</div>
          <div className="text-sm">
            <div>年　月　日現在</div>
            <div className="text-right">写真貼付欄</div>
            <div className="text-right text-xs">(6ヶ月以内に撮影したもの)</div>
          </div>
        </div>

        {/* 氏名 */}
        <div className="flex justify-between items-start border-b py-2">
          <div className="w-1/2">
            <div className="table-header px-2 py-1">ふりがな</div>
            <input 
              className="px-2 py-8 w-full" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="氏名" 
            />
          </div>
          {/* 生年月日 */}
          <div className="w-1/2">
            <div className="table-header px-2 py-1">生年月日</div>
            <input 
              className="px-2 py-8 w-full" 
              value={birthdate} 
              onChange={(e) => setBirthdate(e.target.value)} 
              placeholder="昭和　　年　　月　　日生（満　　歳）" 
            />
          </div>
        </div>

        {/* 現住所 */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">ふりがな</div>
          <input 
            className="px-2 py-8 w-full" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="現住所（〒　　　－　　　）" 
          />
        </div>

        {/* 連絡先 */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">ふりがな</div>
          <input 
            className="px-2 py-8 w-full" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
            placeholder="連絡先（〒　　　－　　　）" 
          />
          <div className="px-2 py-1">(現住所以外に連絡を希望する場合のみ記入)</div>
        </div>

        {/* 電話・E-mail */}
        <div className="flex justify-between items-start border-b py-2">
          <div className="w-1/2">
            <div className="table-header px-2 py-1">電話</div>
            <input 
              className="px-2 py-8 w-full" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="電話" 
            />
            <div className="table-header px-2 py-1">E-mail</div>
            <input 
              className="px-2 py-8 w-full" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="E-mail" 
            />
          </div>
        </div>

        {/* 学歴・職歴 */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">学歴・職歴</div>
          <textarea 
            className="px-2 py-8 w-full h-24" 
            value={educationAndEmployment} 
            onChange={(e) => setEducationAndEmployment(e.target.value)} 
            placeholder="学歴・職歴" 
          />
        </div>

        {/* 免許・資格 */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">免許・資格</div>
          <textarea 
            className="px-2 py-8 w-full h-24" 
            value={licensesAndQualifications} 
            onChange={(e) => setLicensesAndQualifications(e.target.value)} 
            placeholder="免許・資格" 
          />
        </div>

        {/* 志望の動機、自己PR、趣味、特技など */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">志望の動機、自己PR、趣味、特技など</div>
          <textarea 
            className="px-2 py-8 w-full h-24" 
            value={motivation} 
            onChange={(e) => setMotivation(e.target.value)} 
            placeholder="志望の動機、自己PR、趣味、特技など" 
          />
        </div>

        {/* 本人希望記入欄 */}
        <div className="border-b py-2">
          <div className="table-header px-2 py-1">本人希望記入欄</div>
          <textarea 
            className="px-2 py-8 w-full h-24" 
            value={personalRequests} 
            onChange={(e) => setPersonalRequests(e.target.value)} 
            placeholder="本人希望記入欄" 
          />
        </div>

        {/* 保護者等 */}
        <div className="py-2">
          <div className="table-header px-2 py-1">保護者等</div>
          <input 
            className="px-2 py-8 w-full" 
            value={guardian} 
            onChange={(e) => setGuardian(e.target.value)} 
            placeholder="保護者等" 
          />
          <div className="px-2 py-1">(特に記載することがなければ、この欄には何も記入しないでください)</div>
        </div>

        {/* 提出ボタン */}
        <div className="py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            提出
          </button>
        </div>
      </div>
    </div>
  );
}
