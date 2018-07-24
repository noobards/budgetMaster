function buildElement(obj)
{
    var td = document.createElement('td');
    var element = null;
    if(obj.type === 'text' || obj.type === 'number')
    {
        var html_type = getHtmlType(obj.type);
        element = document.createElement("input");
        element.type = html_type;
        element.className = "form-control"+getCssClassName(obj.type);                    
        element.name = obj.name;                    
    }
    else if(obj.type === 'menu')
    {
        element = document.createElement('select');
        element.className = "form-control"+getCssClassName(obj.type);
        element.name = obj.name;
        for(var i = 0; i < obj.options.length; i++)
        {
            var opt = document.createElement("option");
            opt.value = obj.options[i].value;
            opt.text = obj.options[i].text;
            element.appendChild(opt);
        }

    }
    else if(obj.type === 'remove')
    {
        td.className = "text-center";
        element = document.createElement("i");
        element.title = "Remove row";
        element.className = "fa fa-close fa-2x cursor";
        element.innerHTML = "&nbsp;";
    }

    if(element)
    {
        td.appendChild(element);
    }
    return td;
}

function getCssClassName(type)
{
    var data = "";
    switch(type)
    {
        case 'text':
            data = ' isText';
            break;
        case 'number':
            data = ' isNumber';
            break;
        case 'menu':
            data = ' isMenu';
            break;
        case 'email':
            data = ' isEmail';
            break;    
    }

    return data;
}

function getHtmlType(type)
{
    var data = "";
    switch(type)
    {
        case 'text':
            data = 'text';
            break;
        case 'number':
            data = 'number';
            break;
        default:
            data = 'text';
            break;
    }

    return data;
}

function getMenuOptions(selector)
{
    var field = jQuery(selector);
    var options = [];
    if(field.length > 0)
    {
        var tags = field.find('option');
        for(var i = 0; i < tags.length; i++)
        {
            var tag = jQuery(tags[i]);
            options.push({value:tag.attr('value'), text:tag.text()});
        }

    }
    return options;
}