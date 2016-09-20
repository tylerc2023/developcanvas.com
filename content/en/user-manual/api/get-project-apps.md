---
title: List Project Apps
template: usermanual-page.tmpl.html
position: 3
---

## Route URL

<pre class="api">
GET https://playcanvas.com/api/projects/:project_id/apps
</pre>

## Description

Lists all the published Apps of a Project.

## Rate Limiting

This route uses a [normal][1] rate limit.

## Parameters

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>The id of the project.</p></div>
</div>

## Response Schema

<pre class="api">
Status: 200
</pre>

<pre class="api">
{
  result: [{
    "id": int,
    "project_id": int,
    "project": string,
    "owner_id": int,
    "owner": string,
    "name": string,
    "description": string,
    "version": string,
    "release_notes": string,
    "has_thumbnails": boolean,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "size": int,
    "task": {
    "status": "complete" or "error" or "running",
        "message": "string"
    },
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
  }, ... ]
  pagination: {
     ...
  }
}
</pre>

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

[1]: /user-manual/api#rate-limiting