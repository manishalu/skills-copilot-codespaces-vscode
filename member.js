    function skillsMember()
    {
        var member = document.getElementById('member').value;
        var skills = document.getElementById('skills').value;
        var url = 'skills_member.php?member=' + member + '&skills=' + skills;
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState == 4)
            {
                if(xmlhttp.status == 200)
                {
                    document.getElementById('skills_member').innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.send(null);
    }