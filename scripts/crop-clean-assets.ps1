# Crops clean photographic regions out of asset-pack images that contain
# baked-in UI/text from the reference mockups. Crop boxes are proportional
# (x1 y1 x2 y2 as fractions of width/height). Outputs *-clean.jpg files.

Add-Type -AssemblyName System.Drawing

$root = Join-Path $PSScriptRoot "..\public\assets\tideborne"

function Crop-Image {
  param([string]$Src, [string]$Dst, [double]$X1, [double]$Y1, [double]$X2, [double]$Y2)
  $srcPath = Join-Path $root $Src
  $dstPath = Join-Path $root $Dst
  $img = [System.Drawing.Image]::FromFile($srcPath)
  try {
    $rx = [int]($img.Width * $X1); $ry = [int]($img.Height * $Y1)
    $rw = [int]($img.Width * ($X2 - $X1)); $rh = [int]($img.Height * ($Y2 - $Y1))
    $srcRect = New-Object System.Drawing.Rectangle($rx, $ry, $rw, $rh)
    $bmp = New-Object System.Drawing.Bitmap($rw, $rh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rw, $rh)
    $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)
    $bmp.Save($dstPath, $enc, $ep)
    $bmp.Dispose()
    Write-Output ("{0} -> {1} ({2}x{3})" -f $Src, $Dst, $rw, $rh)
  } finally {
    $img.Dispose()
  }
}

# --- Page hero backgrounds ---
Crop-Image "backgrounds\home-hero-ship-polar.jpg"              "backgrounds\home-hero-clean.jpg"               0.16 0.10 1.00 0.95
Crop-Image "backgrounds\destinations-hero-zodiac-antarctica.jpg" "backgrounds\destinations-hero-clean.jpg"     0.08 0.02 0.81 1.00
Crop-Image "backgrounds\expedition-cruises-hero-zodiac.jpg"    "backgrounds\expedition-cruises-hero-clean.jpg" 0.27 0.00 1.00 0.80
Crop-Image "backgrounds\about-hero-ship.jpg"                   "backgrounds\about-hero-clean.jpg"              0.16 0.00 1.00 0.86
Crop-Image "backgrounds\contact-hero-ship.jpg"                 "backgrounds\contact-hero-clean.jpg"            0.09 0.00 1.00 0.88
Crop-Image "backgrounds\footer-whale-ocean.jpg"                "backgrounds\whale-ocean-clean.jpg"             0.40 0.02 1.00 0.92
Crop-Image "backgrounds\contact-penguin-landscape.jpg"         "backgrounds\penguin-landscape-clean.jpg"       0.40 0.00 1.00 1.00

# --- Destination card photos (trim baked-in card edges) ---
Crop-Image "destinations\antarctica-card-photo.jpg" "destinations\antarctica-card-clean.jpg" 0.10 0.15 1.00 1.00
Crop-Image "destinations\iceland-card-photo.jpg"    "destinations\iceland-card-clean.jpg"    0.15 0.10 1.00 1.00
Crop-Image "destinations\galapagos-card-photo.jpg"  "destinations\galapagos-card-clean.jpg"  0.12 0.12 1.00 1.00
Crop-Image "destinations\norway-card-photo.jpg"     "destinations\norway-card-clean.jpg"     0.24 0.14 1.00 1.00

# --- Destination large cards (photo area only, above baked-in labels) ---
Crop-Image "destinations\antarctica-large-card.jpg"     "destinations\antarctica-large-clean.jpg" 0.05 0.05 0.95 0.62
Crop-Image "destinations\iceland-large-card.jpg"        "destinations\iceland-large-clean.jpg"    0.05 0.05 0.95 0.60
Crop-Image "destinations\galapagos-large-card.jpg"      "destinations\galapagos-large-clean.jpg"  0.05 0.05 0.95 0.60
Crop-Image "destinations\norway-large-card.jpg"         "destinations\norway-large-clean.jpg"     0.05 0.05 0.95 0.64
Crop-Image "destinations\arctic-svalbard-large-card.jpg" "destinations\svalbard-large-clean.jpg"  0.05 0.05 0.95 0.70

# --- Itinerary photos (clean photo region right of badges, above tags) ---
Crop-Image "itineraries\antarctica-explorer.jpg"      "itineraries\antarctica-clean.jpg" 0.38 0.10 0.98 0.72
Crop-Image "itineraries\iceland-circumnavigation.jpg" "itineraries\iceland-clean.jpg"    0.30 0.05 0.98 0.70
Crop-Image "itineraries\galapagos-adventure.jpg"      "itineraries\galapagos-clean.jpg"  0.28 0.05 0.98 0.68
Crop-Image "itineraries\norway-fjords.jpg"            "itineraries\norway-clean.jpg"     0.22 0.12 0.84 0.66
Crop-Image "itineraries\svalbard-expedition.jpg"      "itineraries\svalbard-clean.jpg"   0.40 0.12 0.95 0.70
Crop-Image "itineraries\raja-ampat-discovery.jpg"     "itineraries\raja-ampat-clean.jpg" 0.40 0.12 0.95 0.70
Crop-Image "itineraries\hebrides-highlands.jpg"       "itineraries\hebrides-clean.jpg"   0.40 0.14 0.95 0.70
Crop-Image "itineraries\greenland-explorer.jpg"       "itineraries\greenland-clean.jpg"  0.16 0.18 0.78 0.76

# --- Ship cards and galleries (trim baked-in text strips / card edges) ---
Crop-Image "ships\tideborne-pursuit-card.jpg" "ships\pursuit-clean.jpg" 0.05 0.22 0.90 1.00
Crop-Image "ships\tideborne-horizon-card.jpg" "ships\horizon-clean.jpg" 0.04 0.18 0.96 1.00
Crop-Image "ships\tideborne-venture-card.jpg" "ships\venture-clean.jpg" 0.08 0.16 1.00 1.00
Crop-Image "ships\lounge-gallery.jpg"         "ships\lounge-clean.jpg"  0.04 0.30 1.00 1.00
Crop-Image "ships\dining-gallery.jpg"         "ships\dining-clean.jpg"  0.04 0.28 1.00 1.00
Crop-Image "ships\suite-gallery.jpg"          "ships\suite-clean.jpg"   0.04 0.25 1.00 1.00
Crop-Image "ships\deck-pool-gallery.jpg"      "ships\deck-pool-clean.jpg" 0.26 0.12 1.00 1.00
Crop-Image "ships\flagship-observation-lounge.jpg" "ships\flagship-lounge-clean.jpg" 0.02 0.14 1.00 1.00

# --- About imagery ---
Crop-Image "about\zodiac-whale-glacier.jpg"          "about\zodiac-whale-clean.jpg" 0.04 0.42 1.00 1.00
Crop-Image "about\founder-expedition-director.jpg"   "about\founder-clean.jpg"      0.42 0.00 1.00 0.97

Write-Output "Done."
