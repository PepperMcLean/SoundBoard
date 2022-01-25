# SoundBoard
This single page application displays a page where you can fiddle around with looping tracks and make songs.

## Install Instructions
Clone the repository.
```sh
$ git clone git@github.com:PepperMcLean/SoundBoard.git
```
Navigate to the api folder
```sh
cd SoundBoard/Back-End/soundboard-api
```
Install the dependencies 
```sh
$ bundle install
```
Prepare the Database
```sh
$ rails db:migrate
```
Seed the Database
```sh
$ rails db:seed
```
## Usage
Start the server
```sh
$ rails s
```
After you have started the server you can open the application
```sh
$ open index.html
```
## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/PepperMcLean/SoundBoard. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant code of conduct](https://www.contributor-covenant.org/).

## License
[MIT](LICENSE)

## Conduct
Everyone interacting in the SoundBoard project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](CodeOfConduct.md).
