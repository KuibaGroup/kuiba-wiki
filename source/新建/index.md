---
title: 新建
schema:
- name: 模板
  type: select
  option:
  - 文章
  - 文章 > 人物
  - 文章 > 作品
  - 页面
  default: 文章
- name: 标题
  type: text
- name: 编辑
  type: radio
  option:
  - 允许
  - 禁止
  default: 允许
- name: 分类
  type: text
- name: 标签
  type: text
- name: 文章描述
  type: textarea
- name: 基本信息-姓名
  type: text
- name: 基本信息-性别
  type: radio
  option:
  - 未知
  - 男
  - 女
  - 无
  default: 未知
- name: 基本信息-种族
  type: select
  option:
  - 魁拔
  - 天神
  - 天神 > 镜系
  - 天神 > 朴系
  - 天神 > 泱系
  - 天神 > 焰系
  - 天神 > 尘系
  - 妖怪
  - 未知
  default: 未知
- name: 文章内容
  type: textarea
  default: |-
    {% note success 参与贡献者 %}
    |贡献者|贡献内容|内容来源|
    |-|-|-|
    {% endnote %}
---
<form id="new" action="worker" method="POST">
  <table>
    <tbody>
      {% for item in schema %}
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