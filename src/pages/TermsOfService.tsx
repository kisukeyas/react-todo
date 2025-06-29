import { useTranslation } from 'react-i18next'
import './TermsOfService.css'

function TermsOfService() {
  const { i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  return (
    <div className="terms-container">
      <div className="terms-paper">
        <h1 className="terms-title">
          {isJapanese ? 'Talk Diary 利用規約' : 'Talk Diary Terms of Service'}
        </h1>
        
        <div className="terms-date">
          <p>{isJapanese ? '最終更新日：2025年6月29日' : 'Last Updated: June 29, 2025'}</p>
        </div>

        <hr className="terms-divider" />

        <section className="terms-section">
          <h2>{isJapanese ? '1. はじめに' : '1. Introduction'}</h2>
          <p>
            {isJapanese 
              ? 'この利用規約（以下「本規約」）は、Talk Diary（トークダイアリー）（以下「本アプリ」）の利用条件を定めるものです。本アプリを利用することにより、本規約に同意したものとみなされます。同意いただけない場合は、本アプリをアンインストールしてください。本アプリの運営者（以下「当社」）への連絡は、talk.diary.app@gmail.com までお願いします。'
              : 'These Terms of Service ("Terms") define the conditions for using Talk Diary (the "App"). By using the App, you agree to these Terms. If you do not agree, please uninstall the App. To contact the App operator ("we" or "us"), please email talk.diary.app@gmail.com.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '2. サービス内容' : '2. Service Description'}</h2>
          <p>
            {isJapanese 
              ? '本アプリは、音声による日記作成サービスです。ユーザーが話した内容をAIが処理し、文章形式の日記として保存します。サービス内容は予告なく変更または終了する場合があります。'
              : 'The App is a voice-based diary creation service. AI processes spoken content and saves it as text-format diary entries. Service content may change or terminate without notice.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '3. 利用条件' : '3. Eligibility'}</h2>
          <p>
            {isJapanese 
              ? '本アプリは13歳以上の方のみ利用できます。13歳未満の方は利用できません。'
              : 'The App is only available to users 13 years and older. Users under 13 cannot use the App.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '4. プライバシー' : '4. Privacy'}</h2>
          <p>
            {isJapanese 
              ? '個人情報の取り扱いについては、別途定めるプライバシーポリシーに従います。本アプリを利用することにより、プライバシーポリシーにも同意したものとみなされます。'
              : 'Personal information is handled according to our separate Privacy Policy. By using the App, you also agree to the Privacy Policy.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '5. 料金とサブスクリプション' : '5. Fees and Subscriptions'}</h2>
          <p>
            {isJapanese 
              ? '本アプリの料金については、App Store内の説明をご確認ください。サブスクリプションは自動更新され、キャンセルはiOSの設定アプリから行えます。返金についてはAppleのポリシーに従います。'
              : 'For App fees, please check the App Store description. Subscriptions auto-renew and can be cancelled from iOS Settings. Refunds follow Apple\'s policies.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '6. 禁止事項' : '6. Prohibited Conduct'}</h2>
          <p>{isJapanese ? '以下の行為を禁止します：' : 'The following conduct is prohibited:'}</p>
          <ul>
            <li>{isJapanese ? '違法または有害な内容の録音・保存' : 'Recording or storing illegal or harmful content'}</li>
            <li>{isJapanese ? '他者の権利を侵害する行為' : 'Infringing on others\' rights'}</li>
            <li>{isJapanese ? '本アプリの技術的制限を回避する行為' : 'Circumventing technical limitations of the App'}</li>
            <li>{isJapanese ? '本アプリをリバースエンジニアリング、改変する行為' : 'Reverse engineering or modifying the App'}</li>
            <li>{isJapanese ? '自動化ツールを使用して本アプリにアクセスする行為' : 'Using automated tools to access the App'}</li>
            <li>{isJapanese ? '本アプリの正常な動作を妨げる行為' : 'Disrupting normal operation of the App'}</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '7. 知的財産権' : '7. Intellectual Property'}</h2>
          <p>
            {isJapanese 
              ? '本アプリ自体の著作権は当社に帰属します。ユーザーが作成した日記の著作権はユーザーに帰属します。ただし、AIが生成した文章には著作権が発生しない場合があります。'
              : 'Copyright of the App itself belongs to us. Copyright of user-created diary entries belongs to users. However, AI-generated text may not be subject to copyright protection.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '8. 免責事項' : '8. Disclaimer'}</h2>
          <p>
            {isJapanese 
              ? '本アプリは「現状のまま」提供され、いかなる保証もありません。特に以下の点にご注意ください：①AIによる日記生成の正確性は保証されません、②データは端末内に保存されるため、端末の故障・紛失によりデータが失われる可能性があります、③当社は、本アプリの利用により生じた損害について、一切責任を負いません。'
              : 'The App is provided "as is" without any warranties. Please note: ① AI-generated diary accuracy is not guaranteed, ② Data stored on device may be lost if device fails or is lost, ③ We are not liable for any damages from App use.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '9. 規約の変更' : '9. Changes to Terms'}</h2>
          <p>
            {isJapanese 
              ? '当社は必要に応じて本規約を変更できます。重要な変更はアプリ内で通知します。変更後も本アプリを利用し続けることで、変更に同意したものとみなされます。'
              : 'We may change these Terms as needed. Important changes will be notified in the App. Continued use after changes constitutes acceptance of the changes.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '10. その他' : '10. General'}</h2>
          <p>
            {isJapanese 
              ? '本規約は日本法に準拠し、解釈されます。本規約に関する紛争は、日本の裁判所を第一審の専属的合意管轄とします。本規約の一部が無効となっても、他の部分は有効に存続します。'
              : 'These Terms are governed by Japanese law. Disputes regarding these Terms are subject to the exclusive jurisdiction of Japanese courts. If any part of these Terms is invalid, other parts remain valid.'
            }
          </p>
        </section>

        <section className="terms-section">
          <h2>{isJapanese ? '11. お問い合わせ' : '11. Contact Us'}</h2>
          <p>
            {isJapanese 
              ? '本規約に関するご質問は、以下までご連絡ください：'
              : 'For questions about these Terms, please contact us at:'
            }
          </p>
          <p className="terms-contact">
            talk.diary.app@gmail.com
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfService