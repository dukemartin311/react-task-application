import $ from 'jquery';
export const log = content => $('#content').append(">-" + content + "<br>" );
export const logTitle = title => $('#title').append(title);