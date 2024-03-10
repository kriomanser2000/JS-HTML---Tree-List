document.addEventListener('DOMContentLoaded', function() 
{
    var treeItems = document.querySelectorAll('#directory-tree li');
    treeItems.forEach(function(item) 
    {
        item.addEventListener('click', function() 
        {
            var childList = this.querySelector('ul');
            if (childList) 
            {
                childList.classList.toggle('collapsed');
            }
        });
    });
});