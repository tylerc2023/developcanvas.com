---
title: Jobs - ジョブを取得
template: usermanual-page.tmpl.html
position: 5
---

## ルート URL

```none
GET https://playcanvas.com/api/jobs/:id
```

## 説明

idからジョブを取得。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/jobs/99999
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">id</span><p>ジョブのid。</p></div>
</div>

## 応答のスキーマ

```none
Status: 200
```

```none
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "data": object - contents depend on the job
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>非認証</p></div>
<div class="parameter"><span class="param">403</span><p>許可されていません</p></div>
<div class="parameter"><span class="param">404</span><p>ジョブが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

Tこのルートは[normal][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting

