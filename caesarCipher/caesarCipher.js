export const caesarCipher = (string, shift = 1) => {
    var result_array = [];
    var ignore_array = [" ", ",", "!"];
    var max_shift = shift > 23 || shift < -23 ? 23 : shift;
    for (let i = 0; i < string.length; i++) {
      if (!ignore_array.includes(string[i])) {
        var shifted_code = string.charCodeAt(i) + max_shift;
        if(shifted_code < 65 ) {
          var capital_front_shifted_code = 91 - (65 - shifted_code);
          result_array.push(String.fromCharCode(capital_front_shifted_code));
        }
        else if (string.charCodeAt(i) <= 90 && shifted_code > 90) {
          var capital_back_shifted_code = shifted_code - 90 + 64;
          result_array.push(String.fromCharCode(capital_back_shifted_code));
        }
        else if (shifted_code > 122) {
          var lower_back_shifted_code = shifted_code - 122 + 96;
          result_array.push(String.fromCharCode(lower_back_shifted_code));
        } else {
          result_array.push(String.fromCharCode(shifted_code));
        }
      } else {
          result_array.push(string[i]);
      }
    }
    var result_string = result_array.join("");
    return result_string;
  };