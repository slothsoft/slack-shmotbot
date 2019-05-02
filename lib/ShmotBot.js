/**
 * A very basic ShmotBot, adapted for Slack like this:
 * - removed getSynonyms()
 * - removed shouldReactTo()
 * 
 * @version 1.0.0
 */

function ShmotBot() {
}

ShmotBot.prototype.getReactionTo = function(messageContent) {
	var words = messageContent.trim().split(/ +/g);
	var lastWord = this.sanitize(words[words.length-1]);
	var shmastWord = this.shmofy(lastWord);
	if (lastWord == shmastWord)
		return "...";
	return lastWord + "-" + shmastWord;
};

ShmotBot.prototype.sanitize = function(word) {
	var result = word.replace(/[^a-zA-Z]/g, "")
	return this.toFirstUpperCaseLetter(result);
}

ShmotBot.prototype.shmofy = function(word) {
	word = word.toLowerCase();
	var firstVocalIndex = word.indexOf(word.match('[aAeEiIoOuUyYüÜöÖäÄ]'));
	var result = firstVocalIndex < 0 ? word : ("shm" + word.substring(firstVocalIndex));
	return this.toFirstUpperCaseLetter(result);
};

ShmotBot.prototype.toFirstUpperCaseLetter = function(word) {
	return word.substring(0, 1).toUpperCase() + word.toLowerCase().substring(1);
};

module.exports = ShmotBot;