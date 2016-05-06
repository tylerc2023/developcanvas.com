---
title: 物理
template: usermanual-page.tmpl.html
position: 9
---

PlayCanvasは物理エンジンを搭載しています。物理エンジンはリアルにシーン内オブジェクトの動きを制御することができます。多くのゲームは、ゲームプレイを可能にするために何らかの物理シミュレーションを使用しています。例えば、古典的なゲームのAsteroidsでは、船がロケットを発射しながら加速します。それには慣性があり、接触したときに小惑星がそれを破壊します。このような単純なケースはベテランのプログラマにとっては簡単ですが、物理エンジンを使用すれば誰もが作成することができます。

## リジッドボディ

具体的には、PlayCanvasにはリジッドボディ物理エンジンがあります。つまり、エンジンは一切変形しないオブジェクトの理想化された表現であるリジッドボディをシミュレートします。リジッドボディの動きを設定するいくつかのプロパティがあります：

* 大きさ
* 回復
* 摩擦.
* Angular（角）要素
* Linear（線）要素

いつでも、ボディの速度を照会(あるいは直接設定)することができます。次の2つの形式になります：

* 線速度
* 角速度

## 測定の単位

デフォルトでは、PlayCanvas物理エンジンは1メートルを1 unitとしています。オブジェクトを物理的に正確であると思われる速度で落下させるには、シーンのオブジェクトサイズが適切であることを確認する必要があります。

例えば、ゲームに身長1.8メートルのキャラクターを設定している場合、エディタの3Dビューで1.8 unitの高さになります。

## 重力

重力はシーン内のすべてのリジッドボディに適用される一定の力です。デフォルトでは、ワールドの負のY軸に-9.81に設定されています(つまり、直下)。このデフォルトは、地球の重力に近い値です。この値を増減することもできます。例えば、宇宙設定のゲームの重力をゼロに設定することも可能です。シーンにかかる重力を編集するには、Scene Settingsパネルを開きます。

## Moving Rigid Bodies with Forces

Bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant. Let's consider a couple of examples. If you want to push a heavy weight across the floor, you would apply a force over an amount of time:

~~~javascript~~~
    update: function (dt) {
        // While the right arrow key is pressed, apply a force to the right
        if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
            this.entity.rigidbody.applyForce(10, 0, 0);
        }
    }
~~~

If you want to fire a cannonball from a cannon, you would apply a single impulse:

~~~javascript~~~
    update: function (dt) {
        // If the space bar was pressed, apply an impulse up and to the right
        if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
            this.entity.rigidbody.applyImpulse(10, 10, 0);
        }
    }
~~~

## リジッドボディのテレポート

エンティティにリジッドボディとコリジョンコンポーネントを追加することで、物理エンジンにそのエンティティの位置と方向を設定する責任を渡します。これは、pc.Entity APIを使用してスクリプト内のエンティティの位置や向きを更新しようとしても関数に影響を与えないことを意味します。代わりに、瞬間的にリジッドボディの位置および/または向きを更新する旨を物理エンジンに明示的に通知するテレポート関数をリジッドボディコンポーネントに呼び出す必要があります。

