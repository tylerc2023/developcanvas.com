---
title: Branch Workflows
template: usermanual-page.tmpl.html
position: 5
---

プロジェクトのニーズに合うよう、ブランチは何通りもの方法で使用することができます。様々なタイプのプロジェクトに、よく使われるいくつかのメソッドを以下に記しました。

## 機能ベースブランチ

![Feature branches][1]

機能ベースのワークフローでは、開発中の各機能はマスターブランチから新しいブランチを作成することにより開始します。そして、その機能の開発作業は機能ブランチで行われます。機能が完成したら、マスターブランチからのすべての変更を自分のブランチにマージします。最終テストを行ってマスターブランチからの変更が自分の機能に影響を与えていないことを確認し、機能ブランチをマスターブランチにマージします。

## リリースブランチ

生産サイクルが、アプリケーションの出荷番号バージョンにフィーチャーしている場合、そして各バージョンにテスト期間を追加して行う可能性がある場合、リリースブランチワークフローを選択するといいでしょう。

![Release branches][2]

このワークフローでは、新しい機能はマスターブランチにマージされ、バージョンをリリースする準備が整うと、毎回リリースするバージョンにのっとって名付けられた新しいバージョンが与えられます。ビルドはこのリリースブランチからパブリッシュされ、修正があった場合もこちらに追加されます。リリースの準備が整ったら、マスターに修正をマージして、次のリリースへ向けて開発を続けます。

## 継続的デリバリー

アプリケーションが、定期的にアップデート（例えば毎週新しいリリースが出る）される長期間存在する製品の場合、継続的デリバリーワークフローが便利になるでしょう。

![Continuous Delivery][3]

継続的デリバリーワークフローでは、各リリースにブランチを持たせるよりも、息の長いブランチをいくつか使用してアプリケーションのリリースに備えます。例えば、機能はマスターブランチにマージされ、すべての機能がマージされるとマスターブランチは「staging」と呼ばれるブランチにマージされます。ビルドはステージングからテストが行われるサンプル環境にパブリッシュされます。必要な修正がマスターにされると、再びステージングにマージされます。ステージングの準備が整うと、「prod（プロダクション）」と呼ばれる他のブランチにマージされます。本番からビルドが行われ、これが本番環境にパブリッシュされます。

[1]: /images/user-manual/version-control/branch-workflows/feature-branches.png
[2]: /images/user-manual/version-control/branch-workflows/release-branches.png
[3]: /images/user-manual/version-control/branch-workflows/continuous-delivery.png
