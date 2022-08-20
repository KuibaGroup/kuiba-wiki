---
title: 人物
template:
- name: 名称
  type: text
- name: 描述
  type: textarea
  default: >-
    暂无描述
- name: 性别
  type: radio
  option:
  - 未知
  - 男
  - 女
  - 无
  default: 未知
- name: 种族
  type: text
- name: 生日
  type: text
  default: 未知
- name: 登场作品
  type: text
- name: 人物关系图
  type: textarea
  default: |-
    graph LR
    subgraph 亲属
    大吉
    蛮小满
    离离艾
    end
    subgraph 朋友
    谷鸡泰
    end
    蛮吉 -->|养父| 蛮小满
    蛮吉 -->|养母| 离离艾
    蛮吉 ---|朋友| 谷鸡泰
- name: 人物生平图
  type: textarea
  default: |-
    gantt
    dateFormat  YYYY
    axisFormat  魁拔 %Y 年
    section 魁拔之十万火急
    蛮吉出生:milestone, 1664, 0d
    section 魁拔之战神崛起
    发现魁拔能量:milestone, 1672, 0d
- name: 编辑
  type: radio
  option:
  - 允许
  - 禁止
  default: 允许
- name: 标签
  type: checkbox
  option:
  - 未完成
  - 争议
  default:
  - 未完成
---

{% note warning %}
**正在建设中…… 未实装**
{% endnote %}

<form id="new" action="worker" method="POST">
  <table>
    <tbody>
      {% for item in template %}
      <tr>
        <td>{{ item.name }}</td>
        {% if item.type === 'text' %}
          <td><input type="text" name="{{ item.name }}"{% if item.default %} value="{{ item.default }}"{% endif%}></td>
        {% elif item.type === 'textarea' %}
          <td><textarea name="{{ item.name }}" rows="20">{% if item.default %}{{ item.default }}{% endif%}</textarea></td>
        {% elif item.type === 'radio' %}
          <td>
            {% for option in item.option %}
            <label>
              <input type="radio" name="{{ item.name }}" value="{{ option }}"{% if item.default and item.default == option %} checked="true"{% endif%}>
              {{ option }}
            </label>
            {% endfor %}
          </td>
        {% elif item.type === 'checkbox' %}
          <td>
            {% for option in item.option %}
            <label>
              <input type="checkbox" name="{{ item.name }}" value="{{ option }}"{% if item.default and item.default.indexOf(option) != -1 %} checked="true"{% endif%}>
              {{ option }}
            </label>
            {% endfor %}
          </td>
        {% elif item.type === 'select' %}
          <td>
            <select name="{{ item.name }}">
            {% for option in item.option %}
              <option value="{{ option }}"{% if item.default and item.default == option %} selected="true"{% endif%}>{{ option }}</option>
            {% endfor %}
            </select>
          </td>
        {% endif%}
      </tr>
      {% endfor %}
      <tr>
        <td colspan="2"><input type="submit" value="新建"></td>
      </tr>
    </tbody>
  </table>
</form>

<style>
  #new td[colspan="2"] {
    text-align: center;
  }
  #new td > * {
    border: 0;
    outline: 0;
    width: 100% !important;
    background: #00000000;
    background: transparent;
  }
</style>