using System.ComponentModel.DataAnnotations;

namespace VMS.Models;

public class QRCodeGenerateModel
{
    [Display(Name = "Enter Text For QR Code")]
    public string QRCodeText { get; set; }
    
}