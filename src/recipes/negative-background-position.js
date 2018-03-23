/* 
    RECIPE: negative_background_position
    -------------------------------------------------------------
    Author: ADYOUN
    Description: Looking for cases where background-position has a negative value
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function negative_background_position( element, results) {
        if (element.CSSUsage)
        {
            var properties = [ "background-position-x", "background-position-y" ];
            var found = false;

            for (var i = 0; i < properties.length; i++)
            {
                if (found)
                {
                    break;
                }

                if (element.CSSUsage[properties[i]])
                {
                    var bpValues = element.CSSUsage[properties[i]].valuesArray;
                    for (var j = 0; j < bpValues.length; j++)
                    {
                        if (bpValues[j][0] == '-')
                        {
                            var key = "negative_background_position";
                            results[key] = results[key] || { count: 0, };
                            results[key].count++;
                            found = true;
                            break;
                        }
                    }
                }
            }
        }

        return results;
    });
}();
