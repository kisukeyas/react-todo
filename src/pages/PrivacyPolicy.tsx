import { useTranslation } from 'react-i18next'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const { i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  return (
    <div className="privacy-container">
      <div className="privacy-paper">
        <h1 className="privacy-title">
          {isJapanese ? 'Talk Diary プライバシーポリシー' : 'Talk Diary Privacy Policy'}
        </h1>
        
        <div className="privacy-date">
          <p>{isJapanese ? '最終更新日：2025年6月19日' : 'Last Updated: June 19, 2025'}</p>
        </div>

        <hr className="privacy-divider" />

        <section className="privacy-section">
          <h2>{isJapanese ? '1. はじめに' : '1. Introduction'}</h2>
          <p>
            {isJapanese 
              ? 'このプライバシーポリシーは、Talk Diary（トークダイアリー）（以下「本アプリ」）における情報の取り扱いについて説明するものです。本アプリを利用することにより、本ポリシーに同意したものとみなされます。同意いただけない場合は、本アプリをアンインストールしてください。'
              : 'This Privacy Policy explains how Talk Diary (the "App") handles information. By using the App, you agree to this policy. If you do not agree, please uninstall the App.'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '2. 収集する情報' : '2. Information We Collect'}</h2>
          <p>{isJapanese ? '本アプリは以下の情報を収集します：' : 'The App collects the following information:'}</p>
          <ul>
            <li>{isJapanese ? '音声データ：AIとの会話のために一時的に処理されますが、端末やサーバーには保存されません' : 'Voice data: Temporarily processed for AI conversation but not stored on device or servers'}</li>
            <li>{isJapanese ? '日記データ：音声から生成されたテキスト形式の日記（端末内にのみ保存）' : 'Diary data: Text diary generated from voice (stored only on device)'}</li>
            <li>{isJapanese ? '設定情報：ユーザー名（任意）、通知時刻、言語設定（端末内にのみ保存）' : 'Settings: Username (optional), notification time, language settings (stored only on device)'}</li>
            <li>{isJapanese ? '購入情報：サブスクリプション状態（RevenueCat/Apple経由で管理）' : 'Purchase information: Subscription status (managed via RevenueCat/Apple)'}</li>
            <li>{isJapanese ? 'クラッシュレポート：アプリの障害情報（Sentry経由で収集）' : 'Crash reports: App failure information (collected via Sentry)'}</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '3. 情報の利用目的' : '3. How We Use Information'}</h2>
          <p>{isJapanese ? '収集した情報は以下の目的でのみ使用されます：' : 'Collected information is used only for:'}</p>
          <ul>
            <li>{isJapanese ? '音声を文字に変換し、日記を生成するため' : 'Converting voice to text and generating diary entries'}</li>
            <li>{isJapanese ? 'アプリの基本機能（リマインダー通知等）を提供するため' : 'Providing basic app features (reminder notifications, etc.)'}</li>
            <li>{isJapanese ? 'サブスクリプションの管理のため' : 'Managing subscriptions'}</li>
            <li>{isJapanese ? 'アプリの不具合を修正し、安定性を向上させるため' : 'Fixing bugs and improving app stability'}</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '4. 第三者サービスとの情報共有' : '4. Third-Party Services'}</h2>
          <p>{isJapanese ? '本アプリは以下の第三者サービスを利用しており、必要最小限の情報が共有されます：' : 'The App uses the following third-party services with minimal information sharing:'}</p>
          <ul>
            <li>{isJapanese ? 'OpenAI / Google Gemini：音声データをテキストに変換し、日記を生成するため（音声データは処理後、これらのサービスでは保存されません）' : 'OpenAI / Google Gemini: For converting voice to text and generating diary entries (voice data is not stored by these services after processing)'}</li>
            <li>{isJapanese ? 'RevenueCat / Apple App Store：サブスクリプションの管理のため' : 'RevenueCat / Apple App Store: For subscription management'}</li>
            <li>{isJapanese ? 'Sentry：クラッシュレポートの収集のため（個人を特定する情報は含まれません）' : 'Sentry: For crash report collection (no personally identifiable information included)'}</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '5. データの保存と保護' : '5. Data Storage and Protection'}</h2>
          <p>
            {isJapanese 
              ? 'すべての日記データと設定情報は、お使いの端末内にのみ保存されます。当社のサーバーには一切保存されません。端末のセキュリティ機能（パスコード等）により保護されます。'
              : 'All diary data and settings are stored only on your device. Nothing is stored on our servers. Data is protected by your device security features (passcode, etc.).'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '6. データの削除' : '6. Data Deletion'}</h2>
          <p>
            {isJapanese 
              ? 'データは以下の方法で削除できます：①アプリ内の「データを削除」機能を使用する、②アプリをアンインストールする（すべてのローカルデータが自動的に削除されます）。なお、Appleのサブスクリプション履歴は、Appleのポリシーに従って管理されます。'
              : 'You can delete data by: ① Using the "Delete Data" feature in the app, ② Uninstalling the app (all local data will be automatically deleted). Apple subscription history is managed according to Apple\'s policies.'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '7. ユーザーの権利' : '7. Your Rights'}</h2>
          <p>{isJapanese ? 'ユーザーには以下の権利があります：' : 'You have the following rights:'}</p>
          <ul>
            <li>{isJapanese ? 'すべてのデータは端末内に保存されているため、いつでも確認可能です' : 'All data is stored on your device and can be accessed anytime'}</li>
            <li>{isJapanese ? '設定画面から個人情報を変更できます' : 'You can change personal information from settings'}</li>
            <li>{isJapanese ? 'いつでもすべてのデータを削除できます' : 'You can delete all data at any time'}</li>
            <li>{isJapanese ? '日記データをJSON形式でエクスポートできます' : 'You can export diary data in JSON format'}</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '8. トラッキング' : '8. Tracking'}</h2>
          <p>
            {isJapanese 
              ? '本アプリは広告トラッキングや行動追跡を一切行いません。Sentryによる匿名のクラッシュレポートのみを収集します。'
              : 'The App does not perform any advertising tracking or behavior tracking. Only anonymous crash reports are collected via Sentry.'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '9. 年齢制限' : '9. Age Restrictions'}</h2>
          <p>
            {isJapanese 
              ? '本アプリは13歳以上の方を対象としています。13歳未満の方は利用できません。'
              : 'The App is intended for users 13 years and older. Users under 13 cannot use the App.'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '10. プライバシーポリシーの変更' : '10. Changes to Privacy Policy'}</h2>
          <p>
            {isJapanese 
              ? '本ポリシーを変更する場合は、アプリ内でお知らせします。重要な変更の場合は、継続利用前に同意を求めます。'
              : 'If we change this policy, we will notify you in the app. For significant changes, we will request your consent before continued use.'
            }
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isJapanese ? '11. お問い合わせ' : '11. Contact Us'}</h2>
          <p>
            {isJapanese 
              ? '本ポリシーに関するご質問は、以下までご連絡ください：'
              : 'For questions about this policy, please contact us at:'
            }
          </p>
          <p className="privacy-contact">
            talk.diary.app@gmail.com
          </p>
        </section>

        <div className="privacy-footer">
          <p className="privacy-contact">
            {isJapanese ? '運営者：Kisuke' : 'Operator: Kisuke'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy