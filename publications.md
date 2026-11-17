---
layout: default
title: Publications
permalink: /publications/
---

<span class="section-label">Bibliography</span>
<h1>Publications</h1>
<p>
  Selected and recent peer-reviewed journal articles, conference papers, and edited proceedings. Full citation metrics and historical records are available on <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Google Scholar</a> and <a href="https://orcid.org/{{ site.author.orcid }}" target="_blank" rel="noopener">ORCID</a>.
</p>

<div class="filter-bar" role="group" aria-label="Filter publications">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="journal">Journals</button>
  <button class="filter-btn" data-filter="conference">Conferences &amp; Workshops</button>
  <button class="filter-btn" data-filter="editorial">Edited Volumes</button>
</div>

<ul class="work-list">
  {% for pub in site.data.publications %}
  <li class="work-item pub-item" data-type="{{ pub.type }}">
    <div class="work-meta">
      <span class="badge">{{ pub.year }}</span>
      <span class="badge badge-neutral">{{ pub.type_label }}</span>
    </div>
    <div class="work-title">
      {% if pub.url != "" %}
        <a href="{{ pub.url }}" target="_blank" rel="noopener">{{ pub.title }}</a>
      {% else %}
        {{ pub.title }}
      {% endif %}
    </div>
    <div class="work-authors">{{ pub.authors }}</div>
    <div class="work-venue">{{ pub.venue }}</div>
    
    <div class="work-actions">
      {% if pub.url != "" %}
        <a href="{{ pub.url }}" target="_blank" rel="noopener" class="action-btn">DOI / Link</a>
      {% endif %}
      <button type="button" class="action-btn" data-toggle-bib="bib-{{ forloop.index }}">BibTeX</button>
      <button type="button" class="action-btn" data-copy-bib="bib-{{ forloop.index }}">Copy</button>
    </div>
    <pre id="bib-{{ forloop.index }}" class="bibtex-block">{{ pub.bibtex | strip }}</pre>
  </li>
  {% endfor %}
</ul>
