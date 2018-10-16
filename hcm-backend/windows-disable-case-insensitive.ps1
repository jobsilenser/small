$currentPath = (Get-Item -Path ".\").FullName
$modules = @("Al","Ap","Bf","Co","Ess","Mss","Pm","Py","Rc","Rp","Sc","Tr")

For ($i=0; $i -lt $modules.Length; $i++) {
  $module = $modules[$i]
  $modulePath = $currentPath + "\app\Containers\" + $module
  Write-Output "Disable case insensitive module " + $module
  Write-Output "module " + $module + " path >> $modulePath"
  if (Test-Path -Path $modulePath) {
    fsutil.exe file SetCaseSensitiveInfo $modulePath disable
    Get-ChildItem $modulePath -Directory -Recurse | ForEach-Object {
      fsutil.exe file SetCaseSensitiveInfo $_.FullName disable
    }
  }
}
Write-Host -NoNewLine 'Press any key to continue...'
